@component('mail::message')
Appointment Declined!

Hi, {{ $last_name }}! We're sorry to inform you that your appointment for {{ $schedule }}
has been declined. This might be due to some conflicts with other schedules or some emergency. You may try booking an
appointment again or contact us by sending an email at
manabatfloresdentalclinic@gmail.com.

Thanks,<br>
{{ config('app.name') }}
@endcomponent
