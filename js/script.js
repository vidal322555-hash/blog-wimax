const btn=document.querySelector('.menuBtn');const nav=document.querySelector('.navlinks');if(btn)btn.onclick=()=>nav.classList.toggle('open');
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
const search=document.querySelector('#search');if(search)search.oninput=()=>{let q=search.value.toLowerCase();document.querySelectorAll('[data-search]').forEach(x=>x.style.display=x.innerText.toLowerCase().includes(q)?'':'none')};
