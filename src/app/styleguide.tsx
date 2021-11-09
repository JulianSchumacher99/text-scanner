import React from 'react';

function Styleguide() {
  return (
    <body>
      <h2>COLORS</h2>
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              background: 'var(--color-primary)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: 30,
              height: 30,
              background: 'var(--color-secondary)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: 30,
              height: 30,
              background: 'var(--color-contrast)',
              border: '1px solid',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: 30,
              height: 30,
              background: 'var(--color-background)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: 30,
              height: 30,
              background: 'var(--color-text)',
              borderRadius: '50%',
            }}
          />
        </div>
      </div>
      <h1
        style={{
          color: 'var(--color-primary)',
          fontWeight: 700,
        }}
      >
        Headline 1
      </h1>
      <h2 style={{ color: 'var(--color-primary)' }}>Headline 2</h2>
      <h3 style={{ color: 'var(--color-primary)' }}>Headline 3</h3>
      <p style={{ color: 'var(--color-text)' }}>Paragraph</p>
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <button
          style={{
            width: 170,
            height: 40,
            background: 'var(--color-secondary)',
            borderRadius: 'var(--border-radius)',
            border: '0',
            color: 'var(--color-contrast)',
          }}
        >
          Button
        </button>
        <button
          style={{
            width: 170,
            height: 40,
            background: 'var(--color-contrast)',
            borderRadius: 'var(--border-radius)',
            border: 'var(--border-primary)',
            color: 'var(--color-primary)',
          }}
        >
          Button Hover
        </button>
      </div>

      <div
        style={{
          marginTop: 10,
          width: 170,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 'var(--border-radius)',
          background: 'var(--input-field)',
          color: 'var(--color-contrast',
        }}
      >
        Input Field
      </div>
    </body>
  );
}

export default Styleguide;
