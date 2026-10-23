/* Baita Sorvetes + Açaí · itens e preços de EXEMPLO (eles não têm cardápio online) */
window.FL={
 IMG:{ms0:'photo-1572490122747-3968b75cc699',ms2:'photo-1553787499-6f9133860278',ms5:'photo-1579954115545-a95591f28bfc',ms7:'photo-1611928237590-087afc90c6fd',co3:'photo-1774113351718-cdd37ec6b1e8',co5:'photo-1718810125230-e8e2271354f5',co6:'photo-1775744113007-5f9ea0631e64',su0:'photo-1695886855588-47117bca2fe6',su1:'photo-1776127095568-6e7d16698f89',su7:'photo-1646318754907-dc7c0d236a97',sc0:'photo-1629385701021-fcd568a743e8',sc4:'photo-1570197788417-0e82375c9371',sc1:'photo-1761281116743-f5112b4c5219',ai2:'photo-1583238620415-1e363e11aedf',ai5:'photo-1709139068234-f83a548f3bec',ai4:'photo-1684403620650-81dc661a69db',ac3:'photo-1684403731883-67a71a793d2d',tb1:'photo-1780444122216-dad92e90090f',tb5:'photo-1560801619-01d71da0f70c',tb6:'photo-1788013120615-64cb08c746f3',po4:'photo-1677513633949-6148b9c6702b',po2:'photo-1633933037611-f26e54366832',sc6:'photo-1761281137117-42da05306117',sc5:'photo-1605548230624-8d2d0419c517'},
 COMP:['Granola', 'Leite em pó', 'Leite condensado', 'Banana', 'Morango', 'Paçoca', 'Confete', 'Granulado', 'Amendoim', 'Flocos de arroz', 'Ovomaltine', 'Kiwi', 'Uva'],
 SAB:['Chocolate', 'Morango', 'Creme', 'Flocos', 'Napolitano', 'Coco', 'Maracujá', 'Leite Ninho', 'Açaí'],
 CATS:[
  {id:'acai',name:'Açaí no copo',note:'monte do seu jeito',ex:1,szn:['300 ml', '500 ml', '700 ml'],rm:[],items:[['Açaí Tradicional','Açaí cremoso: escolha 4 complementos. Turbine com os adicionais.','ai2',4,'COMP',0],['Açaí com Morango e Ninho','Açaí, morango e creme de Ninho: escolha mais 3 complementos.','ai5',3,'COMP',0],['Açaí Banana e Granola','Açaí com banana, granola e leite condensado.','ac3',0,'COMP',0]]},
  {id:'tigela',name:'Açaí na tigela',note:'pra dividir',ex:1,rm:[],items:[['Tigela de Açaí 1 kg','Açaí na tigela: escolha 6 complementos.','ai4',6,'COMP',0]]},
  {id:'sorvete',name:'Sorvetes',note:'casquinha, taça e pote',rm:[],items:[['Casquinha 1 Bola','Escolha o sabor.','co3',1,'SAB',0],['Casquinha 2 Bolas','Escolha 2 sabores.','co5',2,'SAB',0],['Taça 3 Bolas','3 bolas com calda e chantilly.','su7',3,'SAB',0],['Sundae com Calda','Sorvete de creme com calda de chocolate ou morango.','su1',0,'COMP',0],['Sorvete Copinho','Sorvete no copinho.','tb1',1,'SAB',0],['Pote de Sorvete 1,5 L','Pra levar pra casa.','tb6',2,'SAB',0],['Picolé','Vários sabores.','po4',0,'COMP',1]]},
  {id:'shake',name:'Milk-shakes',note:'batido na hora',szn:['300 ml', '500 ml'],rm:[],items:[['Milk-shake de Ovomaltine','','ms0',0,'COMP',0],['Milk-shake de Chocolate','','ms2',0,'COMP',0],['Milk-shake de Morango','','ms7',0,'COMP',0],['Milk-shake de Leite Ninho','','ms5',0,'COMP',0],['Milk-shake de Nutella','','ms2',0,'COMP',0]]},
  {id:'beb',name:'Bebidas',note:'',rm:[],items:[['Água','500 ml.','sc6',0,'COMP',0],['Refrigerante Lata','350 ml.','sc5',0,'COMP',0]]}
 ],
 PRICE:{'acai-0':[14,20,26],'acai-1':[17,24,30],'acai-2':[15,21,27],'tigela-0':45,'sorvete-0':6,'sorvete-1':10,'sorvete-2':18,'sorvete-3':14,'sorvete-4':8,'sorvete-5':32,'sorvete-6':4,'shake-0':[14,19],'shake-1':[13,18],'shake-2':[13,18],'shake-3':[14,19],'shake-4':[16,22],'beb-0':4,'beb-1':6},
 EXPRICE:['acai-0','acai-1','acai-2','tigela-0','sorvete-0','sorvete-1','sorvete-2','sorvete-3','sorvete-4','sorvete-5','sorvete-6','shake-0','shake-1','shake-2','shake-3','shake-4','beb-0','beb-1'],
 EXTRAS:[['Nutella', 6], ['Creme de Ninho', 4], ['Morango extra', 3], ['Leite condensado extra', 2]],
 KEY:{orders:'bs_orders',cfg:'bs_cfg',me:'bs_me',mine:'bs_mine'},
 ST:{novo:'Recebido',forno:'No forno',saiu:'Saiu pra entrega',pronto:'Pronto pra retirar',fim:'Entregue',cancel:'Cancelado'}
};
(function(F){F.PRODUCTS=[];F.CATS.forEach(c=>c.items.forEach((it,i)=>{const id=c.id+'-'+i,p=F.PRICE[id];F.PRODUCTS.push({pick:it[3]||0,pl:it[4]||'COMP',from:!!it[5],exp:(F.EXPRICE||[]).includes(id),id,cat:c.id,name:it[0],desc:it[1],img:F.IMG[it[2]],sz:Array.isArray(p)?p.slice():[p],szn:c.szn||null,ex:!!c.ex,rm:c.rm||[]})}));
 F.get=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}};
 F.set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}try{F.bc&&F.bc.postMessage(k)}catch(e){}};
 try{F.bc=new BroadcastChannel('baitasorvetes')}catch(e){F.bc=null}
 F.cfg=()=>Object.assign({mode:'auto',wait:'30 a 45 min',off:[],price:{}},F.get(F.KEY.cfg,{}));
 F.sizes=p=>{const c=F.cfg(),o=c.price[p.id];return o?p.sz.map(v=>o+(v-p.sz[0])):p.sz};
 F.brl=v=>'R$ '+Number(v).toFixed(2).replace('.',',');
 F.esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 F.U=(id,w,h)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=68`;
 /* horário (Google): qua a seg 16h30–23h30, terça fechado */
 F.hoursOpen=()=>{const p=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'America/Sao_Paulo',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).map(x=>[x.type,x.value]));const d=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(p.weekday),h=+p.hour,m=h*60+(+p.minute);return{d,h,m,open:d!==2&&m>=990&&m<1410}};
 F.isOpen=()=>{const c=F.cfg();return c.mode==='open'?true:c.mode==='closed'?false:F.hoursOpen().open};
 F.on=fn=>{addEventListener('storage',e=>{if(!e.key||e.key.startsWith('bs_'))fn()});F.bc&&F.bc.addEventListener('message',fn)};
})(window.FL);
