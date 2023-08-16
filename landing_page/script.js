const navigation = document.querySelector('.navigation');
const menuItems = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navigation.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  } else {
    navigation.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  }
});

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.color = 'orange';
  });

  item.addEventListener('mouseout', () => {
    item.style.color = 'white';
  });
});
