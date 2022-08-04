
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
