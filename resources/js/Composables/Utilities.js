
export function formatCurrency(data) {

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
  });

  return formatter.format(data)

}

export function formatNumeric(val) {
  return val < 10 ? '0' + val : val
}

export function stringLimit(val, limit = 15) {
  return val?.length > (limit - 3) ? val.slice(0, limit) + '...' : val
}

export function chipColor(val) {
  switch (val.toLowerCase()) {
    case 'cancelled':
      return 'red';
    case 'approved':
      return 'green';
    case 'success':
      return 'green';
    case 'failed':
      return 'red';
    case 'pending':
      return 'orange'
    case 'cancelled':
      return 'gray'
    default:
      return 'gray'
  }
}
