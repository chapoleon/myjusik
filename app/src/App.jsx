import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { MoneyFitProvider, useMoneyFit } from './state/MoneyFitContext'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import ContactPage from './pages/ContactPage'
import DisclaimerPage from './pages/DisclaimerPage'
import PoliciesPage from './pages/PoliciesPage'
import InvestmentGuidePage from './pages/InvestmentGuidePage'
import ArticlesIndexPage from './pages/ArticlesIndexPage'
import ArticlePage from './pages/ArticlePage'
import BlogIndexPage from './pages/BlogIndexPage'
import BlogPostPage from './pages/BlogPostPage'
import NotFoundPage from './pages/NotFoundPage'

function ToastHost() {
  const { toast } = useMoneyFit()
  if (!toast) return null
  return <div className="toast">{toast}</div>
}

function Shell({ children, footer }) {
  return (
    <>
      <SiteHeader />
      {children}
      {footer ? <SiteFooter /> : null}
      <ToastHost />
    </>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Shell footer={false}>
            <Home />
          </Shell>
        }
      />
      <Route
        path="/quiz"
        element={
          <Shell footer={false}>
            <Quiz />
          </Shell>
        }
      />
      <Route
        path="/result"
        element={
          <Shell footer>
            <Result />
          </Shell>
        }
      />
      <Route
        path="/about"
        element={
          <Shell footer>
            <AboutPage />
          </Shell>
        }
      />
      <Route
        path="/privacy"
        element={
          <Shell footer>
            <PrivacyPage />
          </Shell>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <Shell footer>
            <PrivacyPage />
          </Shell>
        }
      />
      <Route
        path="/terms"
        element={
          <Shell footer>
            <TermsPage />
          </Shell>
        }
      />
      <Route
        path="/disclaimer"
        element={
          <Shell footer>
            <DisclaimerPage />
          </Shell>
        }
      />
      <Route
        path="/policies"
        element={
          <Shell footer>
            <PoliciesPage />
          </Shell>
        }
      />
      <Route
        path="/pages/about"
        element={
          <Shell footer>
            <AboutPage />
          </Shell>
        }
      />
      <Route
        path="/pages/privacy"
        element={
          <Shell footer>
            <PrivacyPage />
          </Shell>
        }
      />
      <Route
        path="/pages/terms"
        element={
          <Shell footer>
            <TermsPage />
          </Shell>
        }
      />
      <Route
        path="/contact"
        element={
          <Shell footer>
            <ContactPage />
          </Shell>
        }
      />
      <Route
        path="/pages/contact"
        element={
          <Shell footer>
            <ContactPage />
          </Shell>
        }
      />
      <Route
        path="/articles/investment-guide"
        element={
          <Shell footer>
            <InvestmentGuidePage />
          </Shell>
        }
      />
      <Route
        path="/articles"
        element={
          <Shell footer>
            <ArticlesIndexPage />
          </Shell>
        }
      />
      <Route
        path="/articles/:slug"
        element={
          <Shell footer>
            <ArticlePage />
          </Shell>
        }
      />
      <Route
        path="/blog"
        element={
          <Shell footer>
            <BlogIndexPage />
          </Shell>
        }
      />
      <Route
        path="/blog/:slug"
        element={
          <Shell footer>
            <BlogPostPage />
          </Shell>
        }
      />
      <Route
        path="*"
        element={
          <Shell footer>
            <NotFoundPage />
          </Shell>
        }
      />
    </Routes>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <MoneyFitProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </MoneyFitProvider>
    </HelmetProvider>
  )
}
