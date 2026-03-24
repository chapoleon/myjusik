import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import InvestmentGuidePage from './pages/InvestmentGuidePage'

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
    </Routes>
  )
}

export default function App() {
  return (
    <MoneyFitProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MoneyFitProvider>
  )
}
