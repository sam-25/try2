
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('menuItemPopup');
    const popupImage = document.getElementById('popupImage');
    const popupTitle = document.getElementById('popupTitle');
    const popupBadge = document.getElementById('popupBadge');
    const popupPrices = document.getElementById('popupPrices');
    const popupDescription = document.getElementById('popupDescription');
    const closeBtn = popup.querySelector('.close');

    // Function to open popup
    function openPopup(item) {
      popupImage.src =  item.getAttribute('data-popup-image') || item.querySelector('img').src;
      popupTitle.textContent = item.querySelector('.card-title').textContent;

      const badgeElement = item.querySelector('.badge');
      if (badgeElement) {
        popupBadge.textContent = badgeElement.textContent;
        popupBadge.style.display = 'inline-block';
      } else {
        popupBadge.style.display = 'none';
      }

      // Clear previous prices
      popupPrices.innerHTML = '';
      // Add all prices
      item.querySelectorAll('.title-2').forEach(priceElement => {
        const priceP = document.createElement('p');
        priceP.textContent = priceElement.textContent;
        priceP.className = 'price';
        // priceP.className = 'price price-italic';
        popupPrices.appendChild(priceP);
      });

      popupDescription.textContent = item.querySelector('.card-text').textContent;
      popup.style.display = 'block';

    }

    // Close popup when clicking on close button or outside the popup
    closeBtn.onclick = () => popup.style.display = 'none';
    window.onclick = (event) => {
      if (event.target == popup) {
        popup.style.display = 'none';
      }
    }

    // Add click event to all menu item titles
    document.querySelectorAll('.menu-card .card-title').forEach(title => {
      title.addEventListener('click', function (e) {
        e.preventDefault();
        openPopup(this.closest('.menu-card'));
      });
    });
  });