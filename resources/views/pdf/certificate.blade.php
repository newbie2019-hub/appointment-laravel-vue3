<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dental Certificate</title>
    <style type="text/css" media="screen">
        html {
            font-family: sans-serif;
            line-height: 1.10;
            margin: 0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
            background-color: #fff;
            font-size: 12px;
            margin: 36pt;
        }

        h4 {
            margin-top: 0;
            margin-bottom: 0.5rem;
        }

        p {
            margin-top: 0;
            margin-bottom: .1rem;
        }


        h4,
        .h4 {
            margin-bottom: 0.5rem;
            font-weight: 500;
            line-height: 1.2;
        }

        h4,
        .h4 {
            font-size: 1.2rem;
        }


        .text-center {
            text-align: center !important;
        }

        .text-uppercase {
            text-transform: uppercase !important;
        }

        .mt-6 {
            margin-top: 6rem;
        }

        .mt-5 {
            margin-top: 5rem;
        }

        .mt-4 {
            margin-top: 4rem;
        }

        .mt-3 {
            margin-top: 3rem;
        }

        .mb-1 {
            margin-bottom: 1rem;
        }

        .mb-2 {
            margin-bottom: 2rem;
        }

        .font-lg {
            font-size: 1rem;
        }

        .font-md {
            font-size: .8rem;
        }

        .font-sm {
            font-size: .6rem;
        }

        .underline {
            text-decoration: underline;
        }

        .flex {
            display: flex;
        }

        .table {
            width: 100%;
        }

        .p-3 {
            padding: 1rem;
        }

        .margin-35 {
            margin-left: 35%;
        }

        .margin-40 {
            margin-left: 40%;
        }

        .text-right {
            text-align: right
        }

        .px-3 {
            padding: 0 1.2rem 0 1.2rem;
        }

        .font-regular {
            font-weight: 400 !important;
        }

        .font-medium {
            font-weight: 600;
        }

        .mb-none {
            margin-bottom: 0 !important;
        }
    </style>
</head>

<body>
    <div class="heading">
        <h4 class="mb-0 text-center">Dr. Joana Marie Manabat-Flores</h4>
        <p class="text-center font-md">General Dentistry | Orthodonics</p>
        <p class="text-center font-md">Purok 2 Sergio Bayam, Calumpit, Bulacan</p>
    </div>
    <table class="mt-3">
        <thead>
            <th scope="col" class="px-3">
                <p class="font-lg">Name: <span class="underline font-regular">{{ $name }}</span></p>
            </th>
            <th scope="col" class="px-3">
                <p class="font-lg">Age: <span class="underline font-regular">{{ $age }}</span></p>
            </th>
            <th scope="col" class="px-3">
                <p class="font-lg">Date: <span class="underline font-regular">{{ $date }}</span></p>
            </th>
        </thead>
        <tbody>
        </tbody>
    </table>
    <table class="">
        <thead>
            <th scope="col" class="px-3">
                <p class="font-lg">Address: <span class="underline font-regular">{{ $address }}</span></p>
            </th>
        </thead>
        <tbody>
        </tbody>
    </table>
    <h1 class="mt-3 text-center text-uppercase">Dental Certificate</h1>
    <p class="mt-4 font-lg">This is to certify that the above patient's name had undergone dental treatment such as:</p>
    <p class="margin-35 text-uppercase mt-3 font-lg mb-1">Services:</p>
    @foreach ($services as $service)
        <p class="margin-40 font-lg font-medium">{{ $service->service->service }}</p>
    @endforeach
    <p class="mt-5">Patient is advised to rest for at least days to avoid unnecessary complications.</p>
    <p>This certification is issued upon request of the patient for whatever purpose it may serve him/her most.</p>
    <h4 class="mt-5 text-right mb-none">Respectfully yours,</h4>
    <h3 class="text-right font-regular">Dr. Joana Marie Manabat-Flores</h3>
</body>

</html>
