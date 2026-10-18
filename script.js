const sky = document.getElementById('sky');
for (let i=0;i<100;i++){const s=document.createElement('i');s.className='star';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.setProperty('--duration',(2.5+Math.random()*5)+'s');s.style.animationDelay=(Math.random()*4)+'s';if(i%9===0){s.style.width='3px';s.style.height='3px';}sky.appendChild(s);}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const letter = `Today is your day, Moon, and if there is one thing I wish you could feel through this screen, it is just how loved you are.\\n\\nDistance means I cannot be there to steal a birthday hug, see your smile up close, or make a thousand little memories beside you today. But it will never mean that you are any less close to my heart.\\n\\nI hope this new year of your life brings you soft mornings, reasons to laugh, courage for the hard days, and all the little things your heart has been quietly wishing for. You deserve a love that feels safe, a life that feels kind, and happiness that stays.\\n\\nUntil I can celebrate beside you, let this little universe remind you that somewhere, under this same sky, someone is thinking of you with the biggest smile.`;
const letterEl = document.getElementById('letterText');
let typingTimer;
function typeLetter(){
  clearInterval(typingTimer); letterEl.textContent=''; let i=0;
  const cursor=document.createElement('span');cursor.className='cursor';cursor.setAttribute('aria-hidden','true');letterEl.appendChild(cursor);
  typingTimer=setInterval(()=>{if(i<letter.length){cursor.insertAdjacentText('beforebegin',letter[i]);i++;}else{clearInterval(typingTimer);cursor.remove();}},19);
}
typeLetter();
document.getElementById('replayLetter').addEventListener('click',()=>{typeLetter();document.getElementById('letter').scrollIntoView({behavior:'smooth'});});

document.querySelectorAll('.photo-card input[type=file]').forEach(input=>{
  input.addEventListener('change',()=>{
    const file=input.files && input.files[0]; if(!file)return;
    if(!file.type.startsWith('image/')){alert('Please choose an image file.');return;}
    const reader=new FileReader();
    reader.onload=()=>{document.getElementById('preview'+input.id.replace('photo','')).src=reader.result;};
    reader.readAsDataURL(file);
  });
});

const giftButton=document.getElementById('giftButton');
const secret=document.getElementById('secretMessage');
giftButton.addEventListener('click',()=>{
  const open=secret.hidden;secret.hidden=!open;giftButton.setAttribute('aria-expanded',String(open));
  giftButton.querySelector('.gift-label').textContent=open?'Your surprise is open ♡':'Tap to open your surprise';
  if(open){confetti();secret.scrollIntoView({behavior:'smooth',block:'center'});}
});
function confetti(){
  const colors=['#f4c5d8','#d99ab9','#e9d8ff','#fff2e9','#a98bc6'];
  for(let i=0;i<48;i++){
    const p=document.createElement('span');p.textContent=['✦','·','♡','✧'][Math.floor(Math.random()*4)];
    p.style.cssText=`position:fixed;z-index:99;left:${Math.random()*100}vw;top:-20px;color:${colors[Math.floor(Math.random()*colors.length)]};font-size:${12+Math.random()*18}px;pointer-events:none;`;
    document.body.appendChild(p);
    const dx=(Math.random()-.5)*220, duration=1800+Math.random()*1800;
    const anim=p.animate([{transform:'translate(0,0) rotate(0deg)',opacity:1},{transform:`translate(${dx}px,${window.innerHeight+80}px) rotate(${Math.random()*600-300}deg)`,opacity:0}],{duration,easing:'cubic-bezier(.2,.7,.4,1)'});
    anim.onfinish=()=>p.remove();
  }
}

// Browsers require a real user gesture before audio can play.
// Add your own MP3 to assets/our-song.mp3 and uncomment the source in index.html.
const music=document.getElementById('bgMusic'), musicToggle=document.getElementById('musicToggle'), musicLabel=document.getElementById('musicLabel');
musicToggle.addEventListener('click',async()=>{
  const source=music.querySelector('source');
  if(!source){musicLabel.textContent='Add your song in README';musicToggle.setAttribute('aria-pressed','false');return;}
  if(music.paused){try{await music.play();musicLabel.textContent='Pause our song';musicToggle.setAttribute('aria-pressed','true');}catch(e){musicLabel.textContent='Tap to play again';}}
  else{music.pause();musicLabel.textContent='Play our song';musicToggle.setAttribute('aria-pressed','false');}
});
