let arr = [
  {
      id: Math.random(),
      name: 'Timur',
      info: {
          school: '235',
          faculity: 'SMM'
      },
  },
  {
      id: Math.random(),
      name: 'Imran',
      info: {
          school: 'ne izvestno',
          faculity: 'programming'
      },
  },
  {
      id: Math.random(),
      name: 'Aminjon',
      info: {
          school: '444',
          faculity: 'Dizayn'
      },
  },
  {
      id: Math.random(),
      name: 'Maxmud',
      info: {
          school: '777',
          faculity: '3dsmax'
      },
  },
  {
      id: Math.random(),
      name: 'Muxammad',
      info: {
          school: '5555',
          faculity: 'Backend'
      },
  },
  {
      id: Math.random(),
      name: 'Timur',
      info: {
          school: '235',
          faculity: 'SMM'
      },
  },
  {
      id: Math.random(),
      name: 'Imran',
      info: {
          school: 'ne izvestno',
          faculity: 'programming'
      },
  },
  {
      id: Math.random(),
      name: 'Aminjon',
      info: {
          school: '444',
          faculity: 'Dizayn'
      },
  },
  {
      id: Math.random(),
      name: 'Maxmud',
      info: {
          school: '777',
          faculity: '3dsmax'
      },
  },

  {
      id: Math.random(),
      name: 'Maxmud',
      info: {
          school: '777',
          faculity: '3dsmax'
      },
  },
  {
      id: Math.random(),
      name: 'Muxammad',
      info: {
          school: '5555',
          faculity: 'Backend'
      },
  },
]

let categories = [
  {
      course: ' SMM',
      count: 0
  },
  {
      course: 'PROGRAMMING',
      count: 0
  },
  {
      course: '     3DSMAX',
      count: 0
  },
  {
      course: ' DIZAYN',
      count: 0
  },
  {
      course: '   BACKEND',
      count: 0
  },
]


for (let category of categories) {
  category.course = category.course.trim().toLowerCase()
}


for (let student of arr) {
  let faculity = student.info.faculity.toLowerCase()

  for (let category of categories) {
      if (category.course === faculity) {
          category.count++ 
      }
  }
}

console.log(categories)
