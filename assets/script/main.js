// Announcement bar--------
function closeBar() {
    document.getElementById('announcement-bar').classList.add('hidden');
}

// sticky header-----------
const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add(
        'bg-white/70',
        'backdrop-blur-md',
        'shadow-sm',
        'border-b',
        'border-white/20'
      );
    } else {
      navbar.classList.remove(
        'bg-white/70',
        'backdrop-blur-md',
        'shadow-sm',
        'border-b',
        'border-white/20'
      );
    }
  });


//   navbar----------------
 const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("backdrop");

  function openMenu() {
    mobileMenu.classList.remove("-translate-y-full", "opacity-0");
    mobileMenu.classList.add("translate-y-0", "opacity-100");

    backdrop.classList.remove("opacity-0", "pointer-events-none");
    backdrop.classList.add("opacity-100");
  }

  function closeMenu() {
    mobileMenu.classList.add("-translate-y-full", "opacity-0");
    mobileMenu.classList.remove("translate-y-0", "opacity-100");

    backdrop.classList.add("opacity-0", "pointer-events-none");
    backdrop.classList.remove("opacity-100");
  }

  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);



// ------------- accordion faq-----------------
// Open item 2 on load
document.querySelectorAll('.faq-item')[1]
    .querySelector('.faq-body').classList.add('open');

function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const body = item.querySelector('.faq-body');
    const icon = item.querySelector('.faq-icon');
    const isOpen = body.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(el => {
        el.querySelector('.faq-body').classList.remove('open');
        const ic = el.querySelector('.faq-icon');
        ic.textContent = '+';
        ic.classList.add('text-gray-400');
        ic.classList.remove('text-forest');
        ic.style.fontSize = '';
    });

    // Open clicked (if it was closed)
    if (!isOpen) {
        body.classList.add('open');
        icon.textContent = '×';
        icon.classList.remove('text-gray-400');
        icon.classList.add('text-forest');
        icon.style.fontSize = '22px';
    }
}


// scroll to top button

  const btn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });