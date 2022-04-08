const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

for (const user in users) {
  if(user.online === true){
    return user
  }
}
