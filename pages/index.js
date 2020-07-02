import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <h1>Inicio</h1>

      {/* CSS dentro de JS */}
      <style jsx>{`
          h1 {
            color: red;
          }
      `}</style>
    </div>
  )
}
