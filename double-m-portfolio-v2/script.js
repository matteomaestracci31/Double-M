
const navToggle=document.querySelector('[data-nav-toggle]');
const nav=document.querySelector('[data-nav]');
if(navToggle&&nav){navToggle.addEventListener('click',()=>nav.classList.toggle('is-open'));}
const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const header=document.querySelector('[data-header]');
window.addEventListener('scroll',()=>{if(window.scrollY>20){header?.classList.add('is-scrolled')}else{header?.classList.remove('is-scrolled')}});
