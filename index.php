<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numeros del Negro Cardoso</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body class="bg-light bg-gradient">
    <div class="container">
        <div class="row bg-info text-white fs-2 font-bold">
            <div id="headerLevel" class="p-2 col-3 d-flex justify-content-start "></div>
            <div id="headerScore" class="p-2 col-6 d-flex justify-content-center">Score 0012800</div>
            <div id="headerTimer" class="p-2 col-3 d-flex justify-content-end">
                <p id="countdown"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <?php include('content.php') ?>
            </div>
            <div class="col-12 bg-success">
                <div class="row text-white text-center fw-bolder">
                    <div class="col-4">#Intento</div>
                    <div class="col-4">Numero</div>
                    <div class="col-4">Respuesta</div>
                </div>
                <div id="attemptsMade" style="min-height: 400px;"></div>
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

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="js/script.js"></script>

</html>