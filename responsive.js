function convertToMobileUI(retryCount = 0, maxRetries = 5) {
    const inspectContainer = document.querySelector('.inspectContainer');
    
    if (!inspectContainer) {
        if (retryCount < maxRetries) {
            // Retry after a short delay
            setTimeout(() => convertToMobileUI(retryCount + 1, maxRetries), 500);
        } else {
            console.log('Max retries reached. No .inspectContainer found.');
        }
        return;
    }

    // Get all inspectBox divs
    const inspectBoxes = inspectContainer.querySelectorAll('.inspectBox');

    if (inspectBoxes.length === 0) {
        if (retryCount < maxRetries) {
            // Retry after a short delay
            setTimeout(() => convertToMobileUI(retryCount + 1, maxRetries), 500);
        } else {
            console.log('Max retries reached. No .inspectBox elements found.');
        }
        return;
    }

    const mobileContainer = document.createElement('div');
    mobileContainer.className = 'mobileInspectContainer';
    const mobileUI = document.createElement('div');
    mobileUI.id = 'mobileui';
    mobileUI.className = 'mobileui';

    inspectBoxes.forEach((box, index) => {
        const label = box.querySelector('label');
        if (label) {
            const button = document.createElement('button');
            button.textContent = label.textContent;
            button.onclick = () => toggleInspectBox(index);
            mobileContainer.appendChild(button);
        }
    });

    // Replace the original container with the mobile version
    inspectContainer.parentNode.replaceChild(mobileContainer, inspectContainer);
    mobileContainer.before(mobileUI);

    // Store the original content for later use
    mobileUI.originalContent = Array.from(inspectBoxes).map(box => box.innerHTML);

    // Function to toggle the visibility of inspect boxes
    function toggleInspectBox(index) {
        const content = mobileUI.originalContent[index];
        mobileUI.innerHTML = content;
        mobileUI.style.display = 'block';
    }

    console.log('Mobile UI conversion successful');
}

// Function to check if the device is mobile
function isMobile() {
    return window.innerWidth <= 768; // You can adjust this threshold
}
function initResponsiveUI() {
    let isMobileView = isMobile();
    
    function handleResize() {
        if (isMobile() !== isMobileView) {
            isMobileView = isMobile();
            if (isMobileView) {
                convertToMobileUI();
            } else {
                location.reload(); // Reload the page to restore desktop view
            }
        }
    }

    // Initial check
    if (isMobileView) {
        // Use setTimeout to ensure DOM is fully loaded
        setTimeout(convertToMobileUI, 0);
    }

    // Listen for window resize events
    window.addEventListener('resize', handleResize);
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', initResponsiveUI);