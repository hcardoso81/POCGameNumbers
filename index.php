<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numeros del Negro Cardoso</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body class="bg-dark numberSelected">
    <a class="mt-2 p-2 text-white" href="#" onclick="location.reload();">NEW</a>
    <div class="container mt-3 bg-light bg-gradient">
        <div class="row bg-info text-white">
            <div id="headerLevel" class="p-2 col-4 d-flex justify-content-start fs-2 font-bold"></div>
            <div id="headerScore" class="p-2 col-4 d-flex justify-content-center"></div>
            <div id="headerTimer" class="p-2 col-4 d-flex justify-content-end">
                <p id="countdown" class="fs-2 font-bold"></p>
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
        <div class="row bg-warning">
            <div class="col-12">
                <div id="numberSelecteables" class="row mt-4 mb-3"></div>
            </div>
            <div class="col-12">
                <?php include('footerActionsButtons.php') ?>
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