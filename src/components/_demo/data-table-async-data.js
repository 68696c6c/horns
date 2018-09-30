const ROWS = [
  {
    first_name: 'Testy',
    last_name: 'McGee',
    email: 'testy.mcgee@example.com',
    created_at: '2007-12-15',
  },
  {
    first_name: 'Bob',
    last_name: 'Guff',
    email: 'bob.guff@example.com',
    created_at: '2015-06-30',
  },
  {
    first_name: 'Alison',
    last_name: 'Chains',
    email: 'alison.chains@example.com',
    created_at: '2018-01-01',
  },
]

const filterRows = (value, callback) => {
  setTimeout(() => {
    if (value === '') {
      return callback(ROWS)
    } else {
      const result = ROWS.filter(row => {
        return row.first_name.toLowerCase().includes(value.toLowerCase()) ||
          row.last_name.toLowerCase().includes(value.toLowerCase()) ||
          row.email.toLowerCase().includes(value.toLowerCase()) ||
          row.created_at.toLowerCase().includes(value.toLowerCase())
      })
      callback(result)
    }
  }, 1000)
}

export default filterRows
