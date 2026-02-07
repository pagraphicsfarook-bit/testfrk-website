<script>
document.addEventListener('wpcf7mailsent', function(event) {

    const form = event.target;

    const data = {
        name: form.querySelector('[name="your-name"]').value,
        phone: form.querySelector('[name="your-phone"]').value,
        email: form.querySelector('[name="your-email"]').value,
        message: form.querySelector('[name="your-message"]').value
    };

    fetch("https://script.google.com/macros/s/AKfycbzQH30tPui-tjy1u9u9_M8qowyWAys--41CcTKXDUC9wbD3-oXa27968cbB-9BnMOAE/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

});
</script>
