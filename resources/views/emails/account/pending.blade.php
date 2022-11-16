@component('mail::message')
Greetings!

Hi, {{ $last_name }}. Your account is still on pending and
you cannot login at the moment. Please wait till the administrator
approve your account. An email will be sent once your account has been
approved.

Thanks,<br>
{{ config('app.name') }}
@endcomponent
