import { HashRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/pages/LandingPage'
import { DocsPage } from '@/pages/DocsPage'
import { WhitepaperPage } from '@/pages/WhitepaperPage'
import { AuditsPage } from '@/pages/AuditsPage'
import { RiskPage } from '@/pages/RiskPage'
import { AppLayout } from '@/components/layout/AppLayout'
import { Overview } from '@/components/app/Overview'
import { MintRedeem } from '@/components/app/MintRedeem'
import { Stake } from '@/components/app/Stake'
import { Earn } from '@/components/app/Earn'
import { Transparency } from '@/components/app/Transparency'
import { Points } from '@/components/app/Points'

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/whitepaper" element={<WhitepaperPage />} />
        <Route path="/audits" element={<AuditsPage />} />
        <Route path="/risk" element={<RiskPage />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Overview />} />
          <Route path="mint" element={<MintRedeem />} />
          <Route path="stake" element={<Stake />} />
          <Route path="earn" element={<Earn />} />
          <Route path="transparency" element={<Transparency />} />
          <Route path="points" element={<Points />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
