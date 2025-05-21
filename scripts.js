$(document).ready(function() {

    $('#menuToggle').click(function() {
        $('#mainNav').toggleClass('active');
    });
    
    const countryCodeMap = {
        'US': '+1',
        'UK': '+44',
        'DE': '+49',
        'CA': '+1',
        'AU': '+61',
        'FR': '+33',
        'JP': '+81',
        'IN': '+91',
        'BR': '+55',
        'MX': '+52'
    };
    
    const initialCountry = $('#country').val();
    if (initialCountry && countryCodeMap[initialCountry]) {
        $('#countryCode').val(countryCodeMap[initialCountry]);
    }

    $('#country').change(function() {
        const selectedCountry = $(this).val();
        if (selectedCountry && countryCodeMap[selectedCountry]) {
            $('#countryCode').val(countryCodeMap[selectedCountry]);
        } else {
            $('#countryCode').val('');
        }
    });
    
    $('#email').on('blur', function() {
        validateEmail($(this).val(), $(this));
    });

    $('#phone').on('blur', function() {
        validatePhone($(this).val(), $(this));
    });
    
    $('.form-grid').submit(function(e) {
        $('.error').removeClass('error');
        
        let isValid = true;
        
        // Validate email
        const email = $('#email').val();
        if (!validateEmail(email, $('#email'))) {
            isValid = false;
        }
        
        const phone = $('#phone').val();
        if (!validatePhone(phone, $('#phone'))) {
            isValid = false;
        }
    });
    
    function validateEmail(email, $field) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            showError($field);
            return false;
        } else {
            clearError($field);
            return true;
        }
    }

    function validatePhone(phone, $field) {
        const phoneRegex = /^[\d\s\-\(\)]{7,}$/;
        
        if (phone && !phoneRegex.test(phone)) {
            showError($field);
            return false;
        } else {
            clearError($field);
            return true;
        }
    }
    
    function showError($element) {
        $element.addClass('error');
    }
    
    function clearError($element) {
        $element.removeClass('error');
    }
});
