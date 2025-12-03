// Alternative Search System with Different IDs
// File: products-search.js

const productDatabase = {
  "categories": [
    {
      "name": "Saksham Product",
      "items": [
        {
          "name": "Analog Input",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Analog Output",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Digital Input",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Digital Output",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Control system",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Industrial Control System",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Automation System",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Programmable Logic Controllers",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Industrial PLC",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Automation controllers",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "PLC automation",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "PLC systems",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "PLC with HMI",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Advanced PLCs",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Saksham",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Saksham S800 Series",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Saksham S700 Series",
          "url": "https://www.tpw-saksham.com/product.html"
        },
        {
          "name": "Saksham IM Series",
          "url": "https://www.tpw-saksham.com/product.html"
        }
      ]
    },
    {
      "name": "Saksham CPU",
      "items": [
        {
          "name": "Saksham CPU-UG",
          "urls": ["https://www.tpw-saksham.com/CPU.html"]
        }
      ]
    },
    {
      "name": "Saksham S800 Series",
      "subcategories": [
        {
          "name": "16 Channel Analog Input Module",
          "items": [
            {
              "name": "AI S800 (S830-14C02CV04G04GIND)",
              "urls": ["https://www.tpw-saksham.com/AI_S830.html"]
            },
            {
              "name": "AI S800 (S830-12C04CV04G04GIND)",
              "urls": ["https://www.tpw-saksham.com/AIS830-12C04CV04G04GIND.HTML"]
            },
            {
              "name": "AI S800 (S830-16C00CV1G16GIND)",
              "urls": ["https://www.tpw-saksham.com/AI16%20(S830-16C00CV01G16GIND).html"]
            },
            {
              "name": "AI S800 (S830-16C00CV04G04GIND)",
              "urls": ["https://www.tpw-saksham.com/AI_S830-16C00CV04G04GIND.html"]
            },
            {
              "name": "AI S800 (S830-16C00CV04G04GINDCC)",
              "urls": ["https://www.tpw-saksham.com/AI16%20(S830-16C00CV04G04GINDCC).HTML"]
            }
          ]
        },
        {
          "name": "16 Channel Analog Output Module",
          "items": [
            {
              "name": "AO S800 (S850-16C00V16G01GIND)",
              "urls": ["https://www.tpw-saksham.com/AO_S850.html"]
            },
            {
              "name": "AO S800 (S850-16C00V1G016GIND)",
              "urls": ["https://www.tpw-saksham.com/AO_S850-16C00V01G16GIND.html"]
            }
          ]
        },
        {
          "name": "32 Channel Digital Input Module",
          "items": [
            {
              "name": "DI S800 (S810-32SK04G08GIND)",
              "urls": ["https://www.tpw-saksham.com/DI810-32.html"]
            }
          ]
        },
        {
          "name": "32 Channel Digital Output Module",
          "items": [
            {
              "name": "DO S800 (S830-32C02CV04G04GIND)",
              "urls": ["https://www.tpw-saksham.com/DO_S830.html"]
            }
          ]
        }
      ]
    },
    {
      "name": "Accessories",
      "subcategories": [
        {
          "name": "FTA (Field Terminal Assembly)",
          "items": [
            {
              "name": "AI-FTA (Analog Input-Field Terminal Assembly)",
              "urls": ["https://www.tpw-saksham.com/Normal-FTA.html"]
            },
            {
              "name": "AO-FTA (Analog Output-Field Terminal Assembly)",
              "urls": ["https://www.tpw-saksham.com/AI_FTA.html"]
            },
            {
              "name": "DI-FTA (Digital Input-Field Terminal Assembly)",
              "urls": ["https://www.tpw-saksham.com/AO_FTA.html"]
            }
          ]
        }
      ]
    },
    {
      "name": "Saksham S700 Series",
      "subcategories": [
        {
          "name": "08 Channel Analog Input Module",
          "items": [
            {
              "name": "AI S700 (S73008C00CV02G04IND07E6)",
              "urls": ["https://www.tpw-saksham.com/AI_S73008C00CV02G04IND07E6.html"]
            },
            {
              "name": "AI S700 (S730-06C02CV02G04GIND)",
              "urls": ["https://www.tpw-saksham.com/AI_S730-06C02CV02G04GIND.html"]
            },
            {
              "name": "AI S700 (S730-07C01CV02G04GIND)",
              "urls": ["https://www.tpw-saksham.com/AI_S730-07C01CV02G04GIND.html"]
            },
            {
              "name": "AI S700 (S73008C00CV01G08GIND)",
              "urls": ["https://www.tpw-saksham.com/AI_S73008C00CV01G08GIND.HTML"]
            },
            {
              "name": "AI S700 (S73016C00CV04G04GIND)",
              "urls": ["https://www.tpw-saksham.com/S730-16C00CV04G04GIND.HTML"]
            }
          ]
        },
        {
          "name": "08 Channel Analog Output Module",
          "items": [
            {
              "name": "AO S700 (S750-08C00V01G08GIND)",
              "urls": ["https://www.tpw-saksham.com/AO_S750.html"]
            },
            {
              "name": "AO S700 (S750-08C00V08G01GIND)",
              "urls": ["https://www.tpw-saksham.com/AO_S750.html"]
            }
          ]
        },
        {
          "name": "16 Channel Digital Input Module",
          "items": [
            {
              "name": "DI S700 (S710-16SK02G08GIND)",
              "urls": ["https://www.tpw-saksham.com/DI_S710.html"]
            }
          ]
        },
        {
          "name": "16 Channel Digital Output Module",
          "items": [
            {
              "name": "DO S700 (S720-16SR02G08GIND)",
              "urls": ["https://www.tpw-saksham.com/DO_S732.html"]
            }
          ]
        }
      ]
    },
    {
      "name": "Saksham IM Series",
      "items": [
        {
          "name": "S650-2001EM08XM01",
          "urls": ["https://www.tpw-saksham.com/IM_S650-2001EM08XM01.html"]
        },
        {
          "name": "S651-2001EM08IM01",
          "urls": ["https://www.tpw-saksham.com/IM_S651-2001EM08IM01.html"]
        },
        {
          "name": "S651-2001EM08OM01",
          "urls": ["https://www.tpw-saksham.com/IM_S651-2001EM08OM01.html"]
        },
        {
          "name": "S658-2001EM08XM01",
          "urls": ["https://www.tpw-saksham.com/IM_S658-2001EM08XM01.html"]
        }
      ]
    }
  ]
};

// Global variable to store flattened products
let flatProductList = [];

// Initialize search functionality
function initializeAlternativeSearch() {
  flatProductList = flattenProductData(productDatabase.categories);
//  console.log('Alternative search initialized with', flatProductList.length, 'products');
}

// Flatten nested product structure
function flattenProductData(categories) {
  let result = [];
 
  categories.forEach(category => {
    // Process direct items
    if (category.items) {
      category.items.forEach(item => {
        if (item.url) {
          result.push({ name: item.name, url: item.url });
        }
        if (item.urls && Array.isArray(item.urls)) {
          item.urls.forEach(url => {
            result.push({ name: item.name, url: url });
          });
        }
      });
    }

    // Process subcategories
    if (category.subcategories) {
      category.subcategories.forEach(subcategory => {
        if (subcategory.items) {
          subcategory.items.forEach(item => {
            if (item.url) {
              result.push({ name: item.name, url: item.url });
            }
            if (item.urls && Array.isArray(item.urls)) {
              item.urls.forEach(url => {
                result.push({ name: item.name, url: url });
              });
            }
          });
        }
      });
    }
  });

  return result;
}

// Main search function - called on keyup
function performProductSearch() {
  const inputField = document.getElementById("productSearchField");
  const searchQuery = inputField.value.toLowerCase().trim();
 
  let resultsPanel = document.getElementById("productSearchResults");
 
  // Create results panel if it doesn't exist
  if (!resultsPanel) {
    resultsPanel = document.createElement("div");
    resultsPanel.id = "productSearchResults";
    resultsPanel.className = "alt-search-results-panel";
    inputField.parentNode.appendChild(resultsPanel);
  }

  // Clear and hide if query is empty
  if (!searchQuery) {
    resultsPanel.innerHTML = "";
    resultsPanel.style.display = "none";
    return;
  }

  // Filter products based on query
  const matchedProducts = flatProductList.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  // Display results
  displaySearchResults(matchedProducts, resultsPanel);
}

// Display search results
function displaySearchResults(products, container) {
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = '<div class="alt-no-results">No products found</div>';
    container.style.display = "block";
    return;
  }

  container.style.display = "block";
 
  // Limit to first 15 results
  const limitedProducts = products.slice(0, 15);
 
  limitedProducts.forEach(product => {
    const resultItem = document.createElement("div");
    resultItem.className = "alt-search-result-item";
    resultItem.textContent = product.name;
    resultItem.onclick = () => {
      window.location.href = product.url;
    };
    container.appendChild(resultItem);
  });

  // Show count if more results available
  if (products.length > 15) {
    const moreInfo = document.createElement("div");
    moreInfo.className = "alt-search-more-info";
    moreInfo.textContent = `+ ${products.length - 15} more results`;
    container.appendChild(moreInfo);
  }
}

// Close results when clicking outside
document.addEventListener('click', function(event) {
  const searchWrapper = document.querySelector('.alt-search-wrapper');
  const resultsPanel = document.getElementById('productSearchResults');
 
  if (searchWrapper && !searchWrapper.contains(event.target) && resultsPanel) {
    resultsPanel.style.display = 'none';
  }
});

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAlternativeSearch);
} else {
  initializeAlternativeSearch();
}


//new updated code from here
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.dropdown-menu .dropdown-toggle').forEach(function(element) {
    element.addEventListener('click', function (e) {
      e.preventDefault();

      // STOP BOOTSTRAP FROM CLOSING DROPDOWN
      e.stopPropagation();
      e.stopImmediatePropagation();

      const submenu = this.nextElementSibling;
      const parentMenu = this.closest('.dropdown-menu');

      parentMenu.querySelectorAll('.dropdown-menu.show').forEach(function(openMenu) {
        if (openMenu !== submenu) {
          openMenu.classList.remove('show');
        }
      });

      submenu.classList.toggle('show');
    });
  });

});



// // Close only nested submenus, NOT navbar dropdowns
document.addEventListener('click', function (e) {
  // Only close if clicking outside any .dropdown-menu
  if (!e.target.closest('.dropdown-menu')) {
    document.querySelectorAll('.dropdown-menu .dropdown-menu.show')
      .forEach(function(submenu) {
        submenu.classList.remove('show');
      });
  }
});
