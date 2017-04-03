$(function () {

	var body = $("body");
	var headerNav = $(".header__nav");
	var headerMenuBtn = $(".header__menu-btn");

	// pr-gallery thumbnails height
	function setPrGalleryThumbnailsHeight() {

		$(".pr-gallery").each(function () {
			var self = $(this);

			var prGalleryItem = self.find(".pr-gallery__thumbnails-item");
			var prGalleryItemWidth = prGalleryItem.width();

			console.log(prGalleryItemWidth);
			prGalleryItem.height(prGalleryItemWidth);
		});
	};
	setPrGalleryThumbnailsHeight();

	// open product page
	body.on("click", ".c-gallery__list-item", function (e) {
		var self = $(this);
		var selfTarget = $(e.target);

		if (!selfTarget.hasClass("c-gallery__list-btn")) {
			window.location = "product.html";
		}
	});

	// call me
	body.on("click", ".js-popup", function (e) {
		e.preventDefault();
		var self = $(this);
		var popup = self.data("popup");

		$("[data-popup=" + popup + "]").fadeIn();
		$("html").addClass("modal-open");
	});

	body.on("click", function (e) {

		var self = $(e.target);

		if (self.hasClass("modal__close") || self.hasClass("modal")) {
			$(".modal").fadeOut();
			$("html").removeClass("modal-open");
		}
	});

	// show - close menu
	body.on("click", ".js-menu-btn", function (e) {
		e.preventDefault();

		if (body.hasClass("menu-open")) {
			body.removeClass("menu-open");
			headerMenuBtn.removeClass("header__menu-btn_active");
			headerNav.slideUp();
		} else {
			body.addClass("menu-open");
			headerMenuBtn.addClass("header__menu-btn_active");
			headerNav.slideDown();
		}
	});

	$(window).on("resize", function () {

		// close menu on resize
		body.removeClass("menu-open");
		headerMenuBtn.removeClass("header__menu-btn_active");

		if (window.matchMedia("(max-width:601px)").matches) {
			headerNav.css("display", "none");
		} else {
			headerNav.css("display", "block");
		}

		// collage photo height
		setCollage();

		// pr-gallery thumbnails height
		setPrGalleryThumbnailsHeight();
	});

	// collage photo height
	function setCollage() {
		var collage = $(".collage");
		var collageWidth = collage.width();

		$(".collage__photo").each(function () {
			var self = $(this);

			if (window.matchMedia("(max-width:600px)").matches) {

				if (self.hasClass("collage__photo_h4") && self.hasClass("collage__photo_w4")) {

					self.innerHeight(collageWidth);
				} else if (self.hasClass("collage__photo_h2") && self.hasClass("collage__photo_w2")) {

					self.innerHeight(collageWidth);
				} else if (self.hasClass("collage__photo_h2") && self.hasClass("collage__photo_w4")) {

					self.innerHeight(collageWidth / 2);
				} else if (self.hasClass("collage__photo_h4") && self.hasClass("collage__photo_w1")) {

					self.innerHeight(collageWidth);
				} else if (self.hasClass("collage__photo_h4") && self.hasClass("collage__photo_w2")) {

					self.innerHeight(collageWidth / 2);
				}
			} else {

				if (self.hasClass("collage__photo_h4") && self.hasClass("collage__photo_w4")) {

					self.innerHeight(collageWidth / 2);
				} else if (self.hasClass("collage__photo_h2") && self.hasClass("collage__photo_w2")) {

					self.innerHeight(collageWidth / 4);
				} else if (self.hasClass("collage__photo_h2") && self.hasClass("collage__photo_w4")) {

					self.innerHeight(collageWidth / 4);
				} else if (self.hasClass("collage__photo_h4") && self.hasClass("collage__photo_w1")) {

					self.innerHeight(collageWidth / 4);
				} else if (self.hasClass("collage__photo_h4") && self.hasClass("collage__photo_w2")) {

					self.innerHeight(collageWidth / 4);
				}
			}
		});
	};
	setCollage();
});
//# sourceMappingURL=app.js.map
