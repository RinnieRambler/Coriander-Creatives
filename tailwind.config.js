module.exports = {
  content: [
    './_includes/**/*.{html,md,js}',
    './_layouts/**/*.{html,md,js}',
    './_*/**/*.{html,md,js}',
    '!./_site/**/*.{html,md,js}',
    './*.{html,md,js}'
  ],
  theme: {
    fontFamily: {
      'lemonde': ['lemonde-courrier', 'serif'],
      'anchorage': ['AnchorageRegular', 'sans-serif'],
      'tokyo-dreams':['TokyoDreams-Regular', 'sans'],

    },
    extend: {
      backgroundPosition: {
        '3/4-top':'25% top',
      },
      spacing: {
        '5': '5%',
        '10': '10%',
      },
      aspectRatio: {
        'portrait-small':'2/3',
        'portrait': '3/4',
        'portrait-tall': '3/5',
        'landscape':'4/3',
      },
      minHeight: {
        '35': '35vh',
        '50': '50vh',
        '60': '60vh',
        '70': '70vh',
        '80': '80vh',
        '90': '90vh',
        '100': '100vh',
      },
      colors: {  
        'very-dark-green':'#1E2812',   
        'mid-dark-green': '#32441E',
        'sage-green': '#606C38',
        'light-sage-green': '#82934C',
        'mint-green': '#D9E0C3',
        'mustard': '#DDA15E',
        'light-mustard': '#D3852D',
        'orange':'#E4833E',
        'peach':'#F6D6B6',
        'cream':'#FEFBF4',
        
      },
    },
  },
  plugins: [],
}
