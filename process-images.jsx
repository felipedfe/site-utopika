#target photoshop

var rootFolder = Folder.selectDialog("Selecione a pasta raiz dos projetos");

var saveQuality = 50; // Ajuste a qualidade de 0 a 100 (menor = mais compactação)

function processThumb(file, destinationFolder) {
    app.open(file);
    var doc = app.activeDocument;

    // Verifica se a camada está desbloqueada
    if (!doc.activeLayer || doc.activeLayer.allLocked) {
        alert("A camada ativa está bloqueada ou é inválida. Pulando este arquivo.");
        doc.close(SaveOptions.DONOTSAVECHANGES);
        return;
    }

    // Rasteriza a camada se necessário
    if (doc.activeLayer.kind !== LayerKind.NORMAL) {
        doc.activeLayer.rasterize(RasterizeType.ENTIRELAYER);
    }

    // Aplica o Gaussian Blur
    try {
        doc.activeLayer.applyGaussianBlur(10);
    } catch (e) {
        alert("Erro ao aplicar Gaussian Blur: " + e.message);
        doc.close(SaveOptions.DONOTSAVECHANGES);
        return;
    }

    // Configura opções de Save for Web
    var saveForWebOptions = new ExportOptionsSaveForWeb();
    saveForWebOptions.format = SaveDocumentType.JPEG;
    saveForWebOptions.quality = saveQuality; // Qualidade de 0 a 100
    saveForWebOptions.includeProfile = false; // Remove o perfil de cor para economizar espaço

    // Define o destino do arquivo otimizado
    var destination = new File(destinationFolder + "/thumb-low.jpg");

    // Verifica se thumb-low.jpg já existe antes de salvar
    if (!destination.exists) {
        doc.exportDocument(destination, ExportType.SAVEFORWEB, saveForWebOptions);
    } else {
        $.writeln("Arquivo thumb-low.jpg já existe, pulando: " + destination.name);
    }

    doc.close(SaveOptions.DONOTSAVECHANGES);
}

if (rootFolder.exists) {
    var subfolders = rootFolder.getFiles(function (file) {
        return file instanceof Folder;
    });

    for (var i = 0; i < subfolders.length; i++) {
        var subfolder = subfolders[i];
        var thumbFile = new File(subfolder + "/thumb.gif");
        var thumbLowFile = new File(subfolder + "/thumb-low.jpg"); // Verificação do arquivo otimizado

        if (thumbFile.exists && !thumbLowFile.exists) {
            processThumb(thumbFile, subfolder);
        } else if (thumbLowFile.exists) {
            $.writeln("Arquivo thumb-low.jpg já existe na pasta: " + subfolder.name);
        } else {
            $.writeln("Arquivo thumb.gif não encontrado na pasta: " + subfolder.name);
        }
    }

    alert("Processamento concluído!");
} else {
    alert("Pasta raiz não encontrada!");
}
