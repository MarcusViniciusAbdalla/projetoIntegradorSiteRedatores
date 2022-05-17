function onScroll() {
  if (scrollY > 10){
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}