'use strict';
// lista de productos de la tienda organizados por seccion
const DB = {
  //la de catalogos
  catalogo: [
    { id:1, nombre:'Chaqueta KS',    cat:'Hombre', precio:89.99,  old:119.99, badge:'oferta', img:'img/productos/prod1.jpg',
      resenas:98,  estrellas:4.5, desc:'Chaqueta oversize con tejido técnico reciclado. Bolsillos profundos y capucha ajustable. Perfecta para el día a día urbano.',
      feat:['Tejido técnico reciclado 100%','Capucha ajustable con cordón','4 bolsillos exteriores','Envío gratis a partir de 60 €'] },
    { id:2, nombre:'Camiseta Logo Tonal',        cat:'Hombre', precio:34.99,  old:null,   badge:'nuevo',  img:'img/productos/prod2.jpg',
      resenas:212, estrellas:4,   desc:'Algodón 100% orgánico con logo en relieve. Corte regular, cuello redondo reforzado. Disponible en 6 colores.',
      feat:['Algodón orgánico certificado GOTS','Logo en relieve resistente al lavado','6 colores disponibles','Envío gratis a partir de 60 €'] },
    { id:3, nombre:'Vestido Midi Fluido',         cat:'Mujer',  precio:64.99,  old:79.99,  badge:'oferta', img:'img/productos/prod3.jpg',
      resenas:67,  estrellas:5,   desc:'Tejido fluido de viscosa sostenible, caída perfecta. Con escote cruzado y tirantes ajustables.',
      feat:['Viscosa sostenible certificada','Escote cruzado, tirantes ajustables','Largo midi (rodilla +20 cm)','Lavable a máquina 30°'] },
    { id:4, nombre:'Blazer Oversize KS',          cat:'Mujer',  precio:99.99,  old:null,   badge:'nuevo',  img:'img/productos/prod4.jpg',
      resenas:43,  estrellas:4.5, desc:'Blazer de corte masculino en lana italiana. Hombreras marcadas, solapa ancha y dos botones.',
      feat:['Lana italiana 70% / Poliéster 30%','Hombreras estructuradas','Dos bolsillos internos','Dry clean recomendado'] },
    { id:5, nombre:'Pantalón Cargo Técnico',      cat:'Hombre', precio:74.99,  old:89.99,  badge:'oferta', img:'img/productos/prod5.jpg',
      resenas:155, estrellas:4,   desc:'Pantalón cargo con tela ripstop resistente al agua. Seis bolsillos, cintura ajustable.',
      feat:['Ripstop resistente al agua DWR','6 bolsillos (2 laterales cargo)','Cintura con cordón ajustable','Corte tapered moderno'] },
    { id:6, nombre:'Sudadera Hoodie Essential',   cat:'Unisex', precio:54.99,  old:null,   badge:'nuevo',  img:'img/productos/prod6.jpg',
      resenas:301, estrellas:5,   desc:'Algodón french terry 320 g/m². Interior suave, capucha doble capa y cordón plano.',
      feat:['French terry 320 g/m² premium','Capucha doble capa sin deformarse','Bolsillo canguro amplio','4 colores: negro, gris, crema, azul'] },
    { id:7, nombre:'Falda Wrap Satinada',         cat:'Mujer',  precio:44.99,  old:59.99,  badge:'oferta', img:'img/productos/prod7.jpg',
      resenas:88,  estrellas:4.5, desc:'Satén ligero con nudo lateral. Largo midi, corte cruzado. Combina con cualquier top de la colección KS.',
      feat:['Satén de poliéster reciclado','Nudo lateral ajustable','Largo midi versátil','3 colores: negro, burdeos, verde botella'] },
    { id:8, nombre:'Abrigo Wool Blend',           cat:'Unisex', precio:149.99, old:199.99, badge:'oferta', img:'img/productos/prod8.jpg',
      resenas:29,  estrellas:5,   desc:'Mezcla de lana merino y poliéster reciclado. Largo a la rodilla, botones metálicos con logo grabado. Edición limitada.',
      feat:['Lana merino 60% / Poliéster reciclado 40%','Botones metálicos con logo KS grabado','Forro interior satinado','Edición limitada – 200 unidades'] },
  ],
  //la de hombres
  hombre: [
    { id:11, nombre:'Jogger Cargo KS',            cat:'Hombre', precio:69.99,  old:null,   badge:'nuevo',  img:'img/productos/prod_h1.jpg',
      resenas:76,  estrellas:4,   desc:'Jogger con tejido técnico stretch y bolsillos cargo laterales. Cintura elástica con cordón plano.',
      feat:['Tejido técnico stretch 4-way','Bolsillos cargo con velcro','Cintura elástica ajustable','Disponible en negro y gris'] },
    { id:12, nombre:'Bomber Reflective',           cat:'Hombre', precio:119.99, old:149.99, badge:'oferta', img:'img/productos/prod_h2.jpg',
      resenas:43,  estrellas:5,   desc:'Bomber con tejido reflectante que brilla bajo la luz artificial. Interior acolchado ligero, puños en punto canalé.',
      feat:['Tejido reflectante 3M','Acolchado ligero 80g','Cierre YKK central','Bolsillo interior oculto'] },
    { id:13, nombre:'Camiseta Drop Shoulder',      cat:'Hombre', precio:29.99,  old:null,   badge:'nuevo',  img:'img/productos/prod_h3.jpg',
      resenas:118, estrellas:4,   desc:'Camiseta de manga corta con corte drop shoulder oversize. Algodón pesado 220 g/m², costuras externas visibles.',
      feat:['Algodón 220 g/m² heavyweight','Corte drop shoulder oversize','Cuello redondo reforzado','5 colores disponibles'] },
  ],
  //la de mujeres
  mujer: [
    { id:21, nombre:'Crop Top Ribbed KS',          cat:'Mujer',  precio:24.99,  old:null,   badge:'nuevo',  img:'img/productos/prod_m1.jpg',
      resenas:201, estrellas:5,   desc:'Crop top ajustado en tejido ribbed acanalado. Escote redondo y largo corto por encima del ombligo.',
      feat:['Tejido ribbed acanalado elástico','Escote redondo limpio','Largo crop','8 colores disponibles'] },
    { id:22, nombre:'Leggings High Waist',          cat:'Mujer',  precio:39.99,  old:49.99,  badge:'oferta', img:'img/productos/prod_m2.jpg',
      resenas:134, estrellas:4,   desc:'Leggings de cintura alta con banda ancha y tejido compresivo. Sin costuras laterales visibles.',
      feat:['Tejido compresivo sin costuras','Cintura alta con banda ancha','Bolsillo lateral disimulado','Negro, gris y burdeos'] },
    { id:23, nombre:'Chaqueta Teddy Bear',          cat:'Mujer',  precio:89.99,  old:null,   badge:'nuevo',  img:'img/productos/prod_m3.jpg',
      resenas:57,  estrellas:5,   desc:'Chaqueta efecto peluche teddy bear. Corte oversize con cuello alto. Extremadamente suave para el invierno urbano.',
      feat:['Tejido teddy bear premium','Corte oversize con cuello alto','Sin forro para máximo volumen','Dry clean recomendado'] },
  ],
  //la de novedadades
  novedades: [
    { id:31, nombre:'Parka Técnica Invierno',       cat:'Unisex', precio:189.99, old:null,   badge:'nuevo',  img:'img/productos/prod_n1.jpg',
      resenas:28,  estrellas:5,   desc:'Parka técnica de invierno con relleno de plumón sintético reciclado. Resistente al viento y al agua, capucha desmontable.',
      feat:['Relleno plumón sintético 200g','Outer DWR resistente al agua','Capucha desmontable con cordón','Bolsillos sellados impermeables'] },
    { id:32, nombre:'Abrigo Oversize Tweed',        cat:'Unisex', precio:159.99, old:null,   badge:'nuevo',  img:'img/productos/prod_n2.jpg',
      resenas:19,  estrellas:5,   desc:'Abrigo de largo midi en mezcla de tweed con hilos metálicos. Corte oversize, solapas anchas y cierre de gancho dorado.',
      feat:['Tweed con hilos metálicos','Corte oversize largo midi','Cierre de gancho dorado','Forro interior satinado'] },
  ],
  //la de ouutles
  outlet: [
    { id:41, nombre:'Sudadera Tie-Dye KS',         cat:'Unisex', precio:24.99,  old:54.99,  badge:'outlet', img:'img/productos/prod_o1.jpg',
      resenas:245, estrellas:3,   desc:'Sudadera con capucha en técnica tie-dye manual. Algodón 320 g/m², cada pieza es única. Stock limitado.',
      feat:['Algodón 320 g/m² french terry','Tie-dye manual, pieza única','Bolsillo canguro','Stock limitado'] },
    { id:42, nombre:'Shorts Cargo Nylon',           cat:'Hombre', precio:19.99,  old:44.99,  badge:'outlet', img:'img/productos/prod_o2.jpg',
      resenas:187, estrellas:3,   desc:'Shorts de nylon con bolsillos cargo laterales y cintura ajustable con cordón. Tela ligera perfecta para verano urbano.',
      feat:['Nylon ligero resistente','2 bolsillos cargo con velcro','Cintura con cordón ajustable','Color negro y caqui'] },
  ],
};

const todos = [...DB.catalogo,...DB.hombre,...DB.mujer,...DB.novedades,...DB.outlet];
let carrito = [];
const fmt = n => n.toLocaleString('es-ES',{style:'currency',currency:'EUR'});
const esc = s => String(s).replace(/'/g,"\\'").replace(/"/g,'&quot;');

// crea las cards de cada seccion con sus datos
function renderSeccion(id, lista) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = lista.map(p => `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card ks-product-card h-100">
        <div class="ks-product-img-wrap">
          <img src="${p.img}" alt="${esc(p.nombre)}" loading="lazy"/>
          <span class="ks-product-badge badge-${p.badge}">${p.badge}</span>
        </div>
        <div class="card-body d-flex flex-column">
          <small class="text-muted mb-1">${p.cat}</small>
          <p class="ks-product-name" title="${esc(p.nombre)}">${p.nombre}</p>
          <div class="d-flex align-items-baseline mb-3">
            <span class="ks-price">${fmt(p.precio)}</span>
            ${p.old?`<span class="ks-price-old">${fmt(p.old)}</span>`:''}
          </div>
          <div class="d-flex gap-2 mt-auto">
            <button class="btn ks-btn-add flex-grow-1"
              onclick="añadirCarrito(${p.id})">
              <i class="bi bi-bag-plus me-1"></i> Añadir
            </button>
            <button class="btn ks-btn-detail"
              data-bs-toggle="modal" data-bs-target="#modalProducto"
              onclick="abrirModal(${p.id})">
              <i class="bi bi-eye"></i>
            </button>
          </div>
        </div>
      </div>
    </div>`).join('');
}

// Funcion para abrir el modal con los datos del producto  
function abrirModal(id) {
  const p = todos.find(x=>x.id===id); if(!p) return;
  document.getElementById('modalLabel').textContent   = p.nombre;
  document.getElementById('modalImg').src             = p.img;
  document.getElementById('modalImg').alt             = p.nombre;
  document.getElementById('modalCat').textContent     = p.cat;
  document.getElementById('modalPrecio').textContent  = fmt(p.precio);
  const oldEl=document.getElementById('modalPrecioOld');
  const dscEl=document.getElementById('modalDescuento');
  oldEl.textContent = p.old?fmt(p.old):''; oldEl.style.display = p.old?'':'none';
  dscEl.textContent = p.old?`-${Math.round((1-p.precio/p.old)*100)}%`:''; dscEl.style.display=p.old?'':'none';
  document.getElementById('modalDesc').textContent    = p.desc;
  document.getElementById('modalResenas').textContent = `(${p.resenas} reseñas)`;
  const se = document.getElementById('modalEstrellas'); se.innerHTML='';
  for(let i=1;i<=5;i++){
    const ic=i<=p.estrellas?'bi-star-fill':(i-0.5<=p.estrellas?'bi-star-half':'bi-star');
    se.innerHTML+=`<i class="bi ${ic} text-warning"></i>`;
  }
  document.getElementById('modalFeatures').innerHTML =
    p.feat.map(f=>`<li><i class="bi bi-check2 text-success me-1"></i>${f}</li>`).join('');
  document.getElementById('modalBtnAdd').onclick = ()=>añadirCarrito(p.id);
}

/* ── CARRITO  DE COMPRA ── */
function añadirCarrito(id) {
  const p=todos.find(x=>x.id===id); if(!p) return;
  const e=carrito.find(x=>x.id===id); e?e.qty++:carrito.push({...p,qty:1});
  actualizarUI();
  mostrarToast(`"${p.nombre}" añadido al carrito`);
}
function quitarCarrito(id){
  carrito=carrito.filter(x=>x.id!==id); actualizarUI();
}
function actualizarUI(){
  const total=carrito.reduce((a,x)=>a+x.precio*x.qty,0);
  const count=carrito.reduce((a,x)=>a+x.qty,0);
  document.getElementById('cartCount').textContent=count;
  document.getElementById('carritoTotal').textContent=fmt(total);
  const v=document.getElementById('carritoVacio');
  const l=document.getElementById('carritoItems');
  if(!carrito.length){v.style.display='';l.innerHTML='';return;}
  v.style.display='none';
  l.innerHTML=carrito.map(x=>`
    <li class="list-group-item px-0 d-flex align-items-center gap-3">
      <img src="${x.img}" alt="${esc(x.nombre)}" style="width:56px;height:70px;object-fit:cover;border-radius:4px;"/>
      <div class="flex-grow-1">
        <p class="mb-0 fw-semibold small">${x.nombre}</p>
        <small class="text-muted">${fmt(x.precio)} × ${x.qty}</small>
      </div>
      <button class="btn btn-sm btn-outline-danger border-0" onclick="quitarCarrito(${x.id})">
        <i class="bi bi-trash3"></i>
      </button>
    </li>`).join('');
}

function mostrarToast(msg){
  const el=document.getElementById('toastCarrito');
  document.getElementById('toastMsg').textContent=msg;
  bootstrap.Toast.getOrCreateInstance(el,{delay:3000}).show();
}

/*  PIE DE PAGINA  */
function initNewsletter(){
  const f=document.getElementById('formNewsletter'); if(!f) return;
  f.addEventListener('submit',e=>{
    e.preventDefault(); e.stopPropagation(); f.classList.add('was-validated');
    if(f.checkValidity()){f.classList.add('d-none');document.getElementById('alertNewsletterOk').classList.remove('d-none');}
  });
}

window.añadirCarrito=añadirCarrito;
window.quitarCarrito=quitarCarrito;
window.abrirModal=abrirModal;

document.addEventListener('DOMContentLoaded',()=>{
  renderSeccion('gridCatalogo',  DB.catalogo);
  renderSeccion('gridHombre',    DB.hombre);
  renderSeccion('gridMujer',     DB.mujer);
  renderSeccion('gridNovedades', DB.novedades);
  renderSeccion('gridOutlet',    DB.outlet);
  actualizarUI();
  initNewsletter();
});