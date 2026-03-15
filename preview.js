/**
 * MoneyFit 로컬 프리뷰 서버
 * - 정적 파일 서빙 (index.html, css, js)
 * - /api/report 프록시 (Cloudflare Pages Function 시뮬레이션)
 *
 * 사용법:
 *   OPENAI_API_KEY=sk-xxx node preview.js
 *   또는 .env 파일에 OPENAI_API_KEY 설정
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// .dev.vars / .env 파일 로딩 (.dev.vars 우선)
function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const content = fs.readFileSync(filePath, 'utf-8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...rest] = trimmed.split('=');
      process.env[key.trim()] = rest.join('=').trim().replace(/^["']|["']$/g, '');
    }
  }
  return true;
}

const devVarsLoaded = loadEnvFile(path.join(__dirname, '.dev.vars'));
const envLoaded = !devVarsLoaded && loadEnvFile(path.join(__dirname, '.env'));
if (devVarsLoaded) console.log('  .dev.vars 파일 로드 완료');
else if (envLoaded) console.log('  .env 파일 로드 완료');

// MIME 타입
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

// CORS 헤더
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// /api/report 핸들러 (Cloudflare Function 시뮬레이션)
async function handleApiReport(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.writeHead(405, { ...corsHeaders, 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const headers = { ...corsHeaders, 'Content-Type': 'application/json; charset=utf-8' };

  try {
    // body 읽기
    const body = await new Promise((resolve, reject) => {
      let data = '';
      req.on('data', chunk => data += chunk);
      req.on('end', () => resolve(JSON.parse(data)));
      req.on('error', reject);
    });

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      res.writeHead(500, headers);
      res.end(JSON.stringify({ error: 'OPENAI_API_KEY 환경변수가 설정되지 않았습니다. OPENAI_API_KEY=sk-xxx node preview.js 또는 .env 파일을 만드세요.' }));
      return;
    }

    console.log('  [API] 보고서 생성 요청:', body.investorType);

    // Cloudflare Function과 동일한 로직
    const { onRequestPost } = await import('./functions/api/report.js');

    // context 시뮬레이션
    const context = {
      request: {
        json: async () => body,
      },
      env: {
        OPENAI_API_KEY: apiKey,
      },
    };

    const response = await onRequestPost(context);
    const responseBody = await response.text();

    res.writeHead(response.status, headers);
    res.end(responseBody);

    console.log('  [API] 보고서 생성 완료 (status:', response.status + ')');

  } catch (err) {
    console.error('  [API] 에러:', err.message);
    res.writeHead(500, headers);
    res.end(JSON.stringify({ error: err.message }));
  }
}

// 정적 파일 서빙
function handleStatic(req, res) {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  // 디렉토리면 index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';

  const content = fs.readFileSync(filePath);
  res.writeHead(200, { 'Content-Type': contentType, ...corsHeaders });
  res.end(content);
}

// 서버 생성
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  // API 라우팅
  if (url.pathname === '/api/report') {
    handleApiReport(req, res);
    return;
  }

  // 정적 파일
  handleStatic(req, res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('  ╔══════════════════════════════════════╗');
  console.log('  ║   💰 MoneyFit 프리뷰 서버            ║');
  console.log(`  ║   http://localhost:${PORT}              ║`);
  console.log('  ╚══════════════════════════════════════╝');
  console.log('');
  console.log('  정적 파일 + /api/report 엔드포인트 활성');
  console.log('  OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? '✅ 설정됨' : '❌ 미설정');
  console.log('');
});
