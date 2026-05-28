const container = document.getElementById("view-container") as HTMLElement;

async function loadView(view: string): Promise<void> {

    try {
        const response = await fetch(`views/${view}.html`);

        if (!response.ok) {
            throw new Error(`View not found: ${view}`);
        }

        const html = await response.text();
        container.innerHTML = html;

    }

    catch (error) {

        console.error("Error loading view:", error);

        container.innerHTML = `
            <article>
                <h2>Error</h2>
                <p>No se pudo cargar la vista.</p>
            </article>
        `;
    }

}

document.querySelectorAll(".btns").forEach((button) => {

    button.addEventListener("click", () => {

        const view = button.textContent?.toLowerCase();

        if (!view) return;

        switch (view) {

            case "inicio":
                loadView("home");
            break;

            case "listas":
                loadView("playlists");
            break;

            case "biblioteca":
                loadView("library");
            break;

            case "ajustes":
                loadView("settings");
            break;

        }

    });

});

loadView("home");