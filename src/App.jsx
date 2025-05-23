import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PlayOriginal from './Pages/PlayOriginal'
import supabase from './config/supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Play from './Pages/Play'

function App() {
  const [session, setSession]=useState(null)

  useEffect(()=>{
    const getSession=async()=>{
      const {data:{session}}=await supabase.auth.getSession();
      setSession(session)
    } 

    getSession();

    const {data:{subscription}} = supabase.auth.onAuthStateChange((_event, session)=>{
      setSession(session)
    })

    return ()=>{subscription.unsubscribe()}

  },[])
  return (
    <>
      <div>
        <Routes>
          <Route
          path="/"
          element={!session?<div id="login">
            <Auth
            supabaseClient={supabase}
            providers={["google"]}
            appearance={{
              theme: ThemeSupa,
              style: {
                input: {
                  color: "#091540",
                },
                label: {
                  color: "#091540",
                  fontWeight: "bold",
                },
                button: {
                  backgroundColor: "#734FCF",
                  fontWeight: "bold",
                  color: "white",
                },
                anchor: {
                  color: "#091540",
                },
              },
            }}
            />
          </div>:
          <Play/>
          // <TestPlay/>
        }
          >
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
