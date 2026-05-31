import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { AppRoutes } from '@/routes/AppRoutes'
import { CustomCursor } from '@/components/common/CustomCursor'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CustomCursor />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
