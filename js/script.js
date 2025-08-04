const products = [
  {
    title: "Alprazolam 1 Mg Tablet",
    image: "Image/1 alpra.png",
    description: `
    Strength: 1 mg<br>
    Packaging Size: 10×10 Tablets<br>
    Brand: Rlam-1<br>
    Manufacturer: Cipla<br>
    Alprazolam treats anxiety & panic disorder. It calms brain excitement.
    <div style="font-weight: bold; font-size: 1.2em; margin-bottom: 8px;">
      Price: 90 Pills for $285
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;180 Pills for $420
    </div>
    <div style="font-size: 1em; font-weight: normal;">`
  },
  {
    title: "Clonazepam 2 Mg Tablet",
    image: "Image/2 clona.png",
    description: `Strength: 2 mg<br>
    Packaging Size: 10×10 Tablets<br>
    Brand: Rnaze<br>
    Shelf Life: 36 months<br>
    Calms brain, treats anxiety, panic, seizures. Rapid & effective.
    <div style="font-weight: bold; font-size: 1.2em; margin-bottom: 8px;">
      Price: 90 Pills for $285
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;180 Pills for $420
    </div>
    <div style="font-size: 1em; font-weight: normal;">`
  },
  {
    title: "Diazepam 10 Mg Tablet",
    image: "Image/3 dia.png",
    description: `Strength: 10 mg<br>
    Packaging Size: 10×10 Tablets<br>
    Brand: ELKIM<br>
    Manufacturer: ELKIM<br>
    Treats anxiety, spasms, seizures & alcohol withdrawal.
    <div style="font-weight: bold; font-size: 1.2em; margin-bottom: 8px;">
      Price: 90 Pills for $285
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;180 Pills for $420
    </div>
    <div style="font-size: 1em; font-weight: normal;">`
  },
  {
    title: "Lorazepam 2 Mg Tablet",
    image: "Image/4 lora.png",
    description: `Strength: 2 mg<br>
    Packaging Size: 10×10 Tablets<br>
    Brand: Varies<br>
    Shelf Life: 36 Months<br>
    Used for anxiety, insomnia & seizures. Fast relief.
    <div style="font-weight: bold; font-size: 1.2em; margin-bottom: 8px;">
      Price: 90 Pills for $285
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;180 Pills for $420
    </div>
    <div style="font-size: 1em; font-weight: normal;">`
  },
  {
    title: "Zolpidem 10 Mg Tablet",
    image: "Image/5 zolp.png",
    description: `Strength: 10 mg<br>
    Packaging Size: 10×10 Tablets<br>
    Brand: Zoltrate 10 Mg<br>
    Manufacturer: Zoltrate 10 Mg<br>
    Helps with short-term insomnia. Slows brain activity.
    <div style="font-weight: bold; font-size: 1.2em; margin-bottom: 8px;">
      Price: 90 Pills for $285
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;180 Pills for $420
    </div>
    <div style="font-size: 1em; font-weight: normal;">`
  },
  {
    title: "Tramadol 100 Mg Tablet",
    image: "Image/6.jpeg",
    description: `Strength: 100 mg<br>
    Packaging Size: 10×10 Tablets<br>
    Brand: Dimedics<br>
    Manufacturer: Dimedics<br>
    Tramadol is used to relieve moderate to moderately severe pain, including pain after surgery.
    <div style="font-weight: bold; font-size: 1.2em; margin-bottom: 8px;">
      Price:180 Pills for $420
    </div>
    <div style="font-size: 1em; font-weight: normal;">`
  },
  {
    title: "Tapentadol 100 Mg Tablet",
    image: "Image/7.jpeg",
    description: `Strength: 100 mg<br>
    Packaging Size: 10×10 Tablets<br>
    Brand: Tydol<br>
    Manufacturer: Tydol<br>
    Tapentadol oral solution and tablet are used to treat pain severe enough to require opioid treatment and when other pain medicines did not work well enough or cannot be tolerated.
    <div style="font-weight: bold; font-size: 1.2em; margin-bottom: 8px;">
      Price: 180 Pills for $420
    </div>
    <div style="font-size: 1em; font-weight: normal;">`
  },
  {
    title: "Modafinil 100 Mg Tablet",
    image: "Image/8.jpeg",
    description: `Strength: 100 mg<br>
    Packaging Size: 10×10 Tablets<br>
    Brand: Milpharm<br>
    Manufacturer: Milpharm<br>
    Modafinil is used to treat excessive sleepiness caused by narcolepsy or shift work sleep disorder.
    <div style="font-weight: bold; font-size: 1.2em; margin-bottom: 8px;">
      Price: 90 Pills for $285
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;180 Pills for $420
    </div>
    <div style="font-size: 1em; font-weight: normal;">`
  },
  {
    title: " Soma 350 Mg Tablet ",
    image: "Image/9Cari.png",
    description: `Strength: 350 mg<br>
    Packaging Size: 10×10 Tablets<br>
    Brand: Soma<br>
    Manufacturer: HAB Pharma<br>
    Carisoprodol Pain O Soma 350mg Tablets are effective muscle relaxants used for the relief of acute musculoskeletal pain.
    <div style="font-weight: bold; font-size: 1.2em; margin-bottom: 8px;">
      Price: 180 Pills for $250
    </div>
    <div style="font-size: 1em; font-weight: normal;">`
  }
];

const container = document.getElementById('productList');

products.forEach((p, index) => {
  const el = document.createElement('div');
  el.className = 'product';
  el.setAttribute("data-aos", "fade-up");
  el.innerHTML = `
    <img src="${p.image}" onclick="toggleImageSize(this)" />
    <div class="product-content">
      <div class="product-title">${p.title}</div>
      <div class="product-desc">${p.description}</div>
    </div>
  `;
  el.onclick = () => window.location.href = `buy.html?product=${encodeURIComponent(p.title)}&img=${p.image}`;
  container.appendChild(el);
});

function toggleImageSize(img) {
  img.classList.toggle('zoomed');
}
