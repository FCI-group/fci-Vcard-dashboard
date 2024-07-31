/* eslint-disable prefer-destructuring */
import { Ability } from '@casl/ability'
import { initialAbility } from './config'
// import { initialAbility } from './config'

//  Read ability from localStorage
// * Handles auto fetching previous abilities if already logged in user
// ? You can update this if you store user abilities to more secure place
// ! Anyone can update localStorage so be careful and please update this
const permissions = JSON.parse(localStorage.getItem('permissions'))
// const existingAbility = permissions || null
// eslint-disable-next-line no-unused-vars
let pre = {}
const obj = []
if (permissions) {
  permissions.forEach(premssion => {
    // // console.log(premssion.name.split('-'))
    pre = premssion.name.split('-')
    obj.push({
      subject: pre[1],
      action: pre[0],
    })
  })
}
// // console.log(obj)
const arr = [...obj, ...initialAbility]

export default new Ability(arr)
