@component('mail::message')
Greetings!

Hi, {{ $last_name }}! Your account has been approved by the administrator.
You can now login to your account to make an appointment. Please take note
that you need to book 2 days prior to your scheduled date.

@component('mail::button', ['url' => ''])
Login Account
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
