const devskills = [
  { id: 121234, devskill: 'Learn Java-script', done: true },
  { id: 123123, devskill: 'Learn css & HTML', done: true },
  { id: 135709, devskill: 'Learn Express', done: false }
]

const getAll = () => {
  return devskills
}

const getOne = (id) => {
  let devskill = devskills.find((devskill) => {
    //find devskills where id is equal to the id parameter
    return devskill.id === parseInt(id)
  })
  return devskill
}

const create = (adevskill) => {
  // {devskill: "user input", id: "devskills.id" , done:"devskills.done"} and
  adevskill.id = Date.now() % 1000000
  adevskill.done = false
  devskills.push(adevskill)
}

const deleteOne = (id) => {
  const idx = devskills.findIndex((devskill) => devskill.id === parseInt(id))
  devskills.splice(idx, 1)
}

const updateOne = (id, updateSkill) => {
  const skillupdate = devskills.find((devskill) => {
    return devskill.id === parseInt(id)
  })
  skillupdate.devskill = updateSkill
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne
}
