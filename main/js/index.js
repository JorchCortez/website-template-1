
$(document).ready(function () {
    // Transition effect for navbar 
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 300) {
        $('.main-header').addClass('visible-nav');
        } else {
        $('.main-header').removeClass('visible-nav');
        }
    });

    $(".about-s-title").click(function(e){
        e.preventDefault();
        let selected = "#" +$(this).attr("id") + "-content";
        $('.content-text').removeClass('active-content');
        $('.about-s-title').removeClass('active');
        $(this).addClass('active');
        $(selected).addClass('active-content');
    }); 
 
    $("#mision, #vision").click( (e) => {
        let title = (e.target.id === "mision") ? "Mision" : "Vision";
        let content = (e.target.id === "mision") ? 
        "Ser la empresa líder en servicios de mantenimiento y asesoría, comprometidos en proporcionar a nuestros clientes productos y servicios de la más alta calidad que satisfagan sus necesidades, siempre en la búsqueda del bien común" :
         "Ser la mejor opción en el mercado en la prestación de nuestros servicios de mantenimiento, consultoría de la cadena logística; con una alta calidad y confiabilidad en nuestra operación, apegado a principios y valores, cumpliendo siempre con las disposiciones legales y fiscales.";
        $("#modalTitle").html(title);
        $("#modalContent").html(content);
        $("#myModal").addClass("active_modal");
    })

    $(".close").click( () => {
        $("#myModal").removeClass("active_modal");
    })

    $("#myModal").click( () => {
        $("#myModal").removeClass("active_modal"); 
    })
});