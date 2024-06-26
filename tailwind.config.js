/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "public/index.html",
  ],
  theme: {
    extend: {
    borderRadius: {
      none: '0',
      3: '3px',
      5: '5px',
      6: '6px',
      8: '8px',
      12: '12px',
      16: '16px',
      24: '24px',
      32: '32px',
      100: '100px',
      circle: '100%',
    },
    borderWidth: {
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },

    spacing: {
      auto: 'auto',
      0: '0px',
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      44: '44px',
      48: '48px',
      52: '52px',
      56: '56px',
      60: '60px',
      64: '64px',
      72: '72px',
      80: '80px',
      84: '84px',
      88: '88px',
      96: '96px',
      128: '128px',
      140: '140px',
    },

      fontFamily: {
        heading: 'Italianno',
        subheading: 'Italianno',
        ranie: 'Ephesis',
        body: 'poppins',
      },
      fontSize: {
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
        25: '25px',
        28: '28px',
        31: '31px',
        32: '32px',
        34: '34px',
        39: '39px',
        40: '40px',
        48: '48px',
      },
    lineHeight: {
      100: '100%',
      110: '110%',
      120: '120%',
      130: '130%',
      140: '140%',
      150: '150%',
      160: '160%',
      170: '170%',
      180: '180%',
      190: '190%',
      200: '200%',
    },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
}

