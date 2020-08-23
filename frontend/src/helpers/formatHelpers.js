const formatter = Intl.NumberFormat('en-US');

function formatNumber(value) {
  return formatter.format(value);
}

function formatPercentage(value) {
  const stringValue = value.toFixed(2);
  return stringValue + '%';
}

export { formatNumber, formatPercentage };
