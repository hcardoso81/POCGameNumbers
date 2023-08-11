<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numeros del Negro Cardoso</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body class="bg-light bg-gradient">
    <div class="p-2">
        <div class="bg-info">
            <div class=" row text-white fs-3 font-bold">
                <div id="headerLevel" class="col-3 text-center"></div>
                <div id="headerScore" class="col-6 text-center">Score 0012800</div>
                <div id="headerTimer" class="col-3 text-center">
                    <p id="countdown"></p>
                </div>
            </div>
        </div>

        <div class="bg-success">

            <div class="row text-white fw-bolder">
                <div class="col-3 text-center">Intentos</div>
                <div class="col-3 text-center">indagados</div>
                <div class="col-6 text-center">Respuesta</div>
            </div>
            <div id="attemptsMade" style="min-height: 400px;"></div>
        </div>
        <div class="row">
            <div>
                <div id="targetLevelTitle" class="text-center mt-2 fs-3 font-bold"></div>
            </div>
            <div class="mt-3 row">
                <div class="col"></div>
                <div class="col fs-1">
                    <div id="numberSecretContent" class="w-75 d-flex justify-content-center text-danger fw-bolder text-center" style="min-height: 40px;">
                    </div>
                </div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col fs-1">
                    <div id="numberUserContent" class="numberSelected w-75 d-flex justify-content-center fw-bolder text-center" style="min-height: 40px;">
                    </div>

                </div>
                <div class="col"></div>
            </div>
        </div>
        <div id="numberSelecteables" class="row mt-4"></div>
        <div class="row mt-4">
            <div class="col-3 mb-4">
                <button type="button" class="btn btn-dark w-100" onclick="location.reload()">New</button>
            </div>
            <div class="col-3 mb-4">
                <button id="investigateButton" type="button" class="btn btn-primary w-100" disabled>Indagar</button>
            </div>
            <div class="col-3 mb-4">
                <button id="confirmButton" type="button" class="btn btn-success w-100" disabled>All in</button>
            </div>
            <div class="col-3 mb-4">
                <button id="cleanButton" type="button" class="btn btn-danger w-100">Limpiar</button>
            </div>
        </div>
        <div class="modal fade" id="modalResultDiv" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-0"></div>
                    <div id="modalBodyDiv" class="modal-body text-center">
                        <div id="titleResult"></div>
                    </div>
                    <div class="modal-footer justify-content-center border-0">
                        <button type="button" class="btn btn-primary">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="js/script.js"></script>

</html>