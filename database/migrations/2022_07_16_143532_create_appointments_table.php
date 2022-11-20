<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->datetime('schedule');
            $table->foreignId('user_id')->nullable()->constrained();
            $table->float('subtotal');
            $table->string('payment_status')->default('Pending');
            $table->string('appointment_status')->default('Pending');
            $table->string('message');
            $table->string('q1', 4);
            $table->string('q2', 4);
            $table->string('q3', 4);
            $table->string('q4', 4);
            $table->string('q5', 4);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointments');
    }
};
