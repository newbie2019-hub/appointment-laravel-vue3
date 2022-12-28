@component('mail::message')
Greetings!

Hi, {{ $last_name }}! Sorry, Your account has been declined by the administrator.
Please contact the admin by going to the home page of our website.

@component('mail::button', ['url' => 'https://manabatfloresdentalclinic.online'])
Go To Website
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
