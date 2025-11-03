function displayLikes(names){

  const count = names.length - 2;

  if(names.length === 1){
    return `${names[0]} likes this`
  } else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  } else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if(names.length === 4){
    return `${names[0]}, ${names[1]} and ${count} others like this`
  } else if(names.length === 5){
    return `${names[0]}, ${names[1]} and ${count} others like this`
  } else {
    return 'no one like this'
  }
}

console.log(displayLikes([]))
console.log(displayLikes(['Peter']))
console.log(displayLikes(['Jacob', 'Alex']))
console.log(displayLikes(['Max', 'John', 'Mark']))
console.log(displayLikes(['Alex', 'Jacob', 'Mark', 'Max']))
console.log(displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill']))
