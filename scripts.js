const headbar = document.querySelector('.fa-bars');
const cross = document.querySelector('#badcross');
const headerbar = document.querySelector('.headerbar');

headbar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function(){
    cross.style.display ='none';
    headerbar.style.right = '-100%';
})

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking Submitted!');
});