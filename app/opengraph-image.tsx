import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 90px',
          background: '#0c1420',
          backgroundImage: 'radial-gradient(circle at 82% 15%, rgba(224,181,88,0.18), transparent 55%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2.5l2.1 1.6 2.6-.4 1 2.4 2.4 1-.4 2.6 1.6 2.1-1.6 2.1.4 2.6-2.4 1-1 2.4-2.6-.4L12 21.5l-2.1-1.6-2.6.4-1-2.4-2.4-1 .4-2.6L2.7 12l1.6-2.1-.4-2.6 2.4-1 1-2.4 2.6.4L12 2.5z"
              fill="#e0b558"
            />
            <path d="M8.3 12.3l2.4 2.4 5-5.2" stroke="#0c1420" strokeWidth="1.8" />
          </svg>
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 600, color: '#eef1f7' }}>
            Property<span style={{ color: '#e0b558' }}>Jaanch</span>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 60, fontWeight: 600, color: '#eef1f7', lineHeight: 1.15, maxWidth: 820 }}>
          Real estate you can trust.
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#b4bed4', marginTop: 24 }}>
          Verify. Trust. Transact.
        </div>
      </div>
    ),
    size
  )
}
