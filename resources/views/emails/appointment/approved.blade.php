@component('mail::message')
Appointment Approved

Hi, {{ $last_name }}! We would like to inform you that your appointment for {{ $schedule }}
has been approved. Please come on time and follow our safety protocols to
ensure that all of our patients and staff will be safe.

Thanks,<br>
{{ config('app.name') }}
@endcomponent
