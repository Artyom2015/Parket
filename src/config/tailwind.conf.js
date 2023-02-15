const colorTheme = {
    'black':'var(--black)',
     
  }
  
  const spacingTheme = Array(31).fill(null)
    .reduce((acc, _, index) => ({ ...acc, ...{ [index]: `${(index) * 4}px` } }), {});
  
  module.exports = {
    colorTheme,
    spacingTheme,
  }