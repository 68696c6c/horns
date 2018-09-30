const ROWS = [
  {
    first_name: 'Testy',
    last_name: 'McGee',
    email: 'testy.mcgee@example.com',
  },
  {
    first_name: 'Bob',
    last_name: 'Guff',
    email: 'bob.guff@example.com',
  },
  {
    first_name: 'Maynard James',
    last_name: 'Keenan',
    email: 'maynard.keenan@example.com',
  },
  {
    first_name: 'Adam',
    last_name: 'Jones',
    email: 'adam.jones@example.com',
  },
  {
    first_name: 'Justin',
    last_name: 'Chancellor',
    email: 'justin.chancellor@example.com',
  },
  {
    first_name: 'Danny',
    last_name: 'Carey',
    email: 'danny.carey@example.com',
  },
  {
    first_name: 'Jens',
    last_name: 'Kidman',
    email: 'jens.kidman@example.com',
  },
  {
    first_name: 'Fredrik',
    last_name: 'Thordendal',
    email: 'fredrik.thordendal@example.com',
  },
  {
    first_name: 'Mårten',
    last_name: 'Hagström',
    email: 'mårten.hagström@example.com',
  },
  {
    first_name: 'Dick',
    last_name: 'Lövgren',
    email: 'dick.lövgren@example.com',
  },
  {
    first_name: 'Tomas',
    last_name: 'Haake',
    email: 'tomas.haake@example.com',
  },
  {
    first_name: 'Randy',
    last_name: 'Blythe',
    email: 'randy.blythe@example.com',
  },
  {
    first_name: 'Mark',
    last_name: 'Morton',
    email: 'mark.morton@example.com',
  },
  {
    first_name: 'Willie',
    last_name: 'Adler',
    email: 'willie.adler@example.com',
  },
  {
    first_name: 'John',
    last_name: 'Campbell',
    email: 'john.campbell@example.com',
  },
  {
    first_name: 'Chris',
    last_name: 'Adler',
    email: 'chris.adler@example.com',
  },
  {
    first_name: 'Aaron',
    last_name: 'Turner',
    email: 'aaron.turner@example.com',
  },
  {
    first_name: 'Michael',
    last_name: 'Gallagher',
    email: 'michael.gallagher@example.com',
  },
  {
    first_name: 'Bryant Clifford',
    last_name: 'Meyer',
    email: 'bryant.meyer@example.com',
  },
  {
    first_name: 'Jeff',
    last_name: 'Caxide',
    email: 'jeff.caxide@example.com',
  },
  {
    first_name: 'Aaron',
    last_name: 'Harris',
    email: 'aaron.harris@example.com',
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
          row.email.toLowerCase().includes(value.toLowerCase())
      })
      callback(result)
    }
  }, 1000)
}

export default filterRows
