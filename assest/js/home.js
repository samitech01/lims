const body = document.querySelector("body");
        const darkLight = document.querySelector("#darkLight");
        const sidebar = document.querySelector(".sidebar");
        const submenuItems = document.querySelectorAll(".submenu_item");
        const sidebarOpen = document.querySelector("#sidebarOpen");
        const sidebarClose = document.querySelector(".collapse_sidebar");
        const sidebarExpand = document.querySelector(".expand_sidebar");
        const notificationIcon = document.querySelector("#notificationIcon");
        const notificationDropdown = document.querySelector("#notificationDropdown");

        sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));
        sidebarClose.addEventListener("click", () => {
            sidebar.classList.add("close", "hoverable");
        });
        sidebarExpand.addEventListener("click", () => {
            sidebar.classList.remove("close", "hoverable");
        });
        sidebar.addEventListener("mouseenter", () => {
            if (sidebar.classList.contains("hoverable")) {
                sidebar.classList.remove("close");
            }
        });
        sidebar.addEventListener("mouseleave", () => {
            if (sidebar.classList.contains("hoverable")) {
                sidebar.classList.add("close");
            }
        });
        darkLight.addEventListener("click", () => {
            body.classList.toggle("dark");
            if (body.classList.contains("dark")) {
                darkLight.classList.replace("bx-sun", "bx-moon");
            } else {
                darkLight.classList.replace("bx-moon", "bx-sun");
            }
        });
        submenuItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                item.classList.toggle("show_submenu");
                submenuItems.forEach((item2, index2) => {
                    if (index !== index2) {
                        item2.classList.remove("show_submenu");
                    }
                });
            });
        });
        if (window.innerWidth < 768) {
            sidebar.classList.add("close");
        } else {
            sidebar.classList.remove("close");
        }
        submenuItems.forEach((item, index) => {
            const submenu = item.nextElementSibling;
            item.addEventListener("click", () => {
                if (submenu.style.height && submenu.style.height !== "0px") {
                    submenu.style.height = "0";
                    submenu.style.opacity = "0";
                    submenu.style.visibility = "hidden";
                    item.classList.remove("show_submenu");
                } else {
                    submenuItems.forEach((item2, index2) => {
                        const submenu2 = item2.nextElementSibling;
                        if (index !== index2) {
                            submenu2.style.height = "0";
                            submenu2.style.opacity = "0";
                            submenu2.style.visibility = "hidden";
                            item2.classList.remove("show_submenu");
                        }
                    });
                    submenu.style.height = submenu.scrollHeight + "px";
                    submenu.style.opacity = "1";
                    submenu.style.visibility = "visible";
                    item.classList.add("show_submenu");
                }
            });
        });
        notificationIcon.addEventListener("click", () => {
            notificationDropdown.style.display = notificationDropdown.style.display === "none" || notificationDropdown.style.display === "" ? "block" : "none";
        });