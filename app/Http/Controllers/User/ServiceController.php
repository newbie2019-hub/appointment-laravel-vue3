<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceRequest;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index(Request $request)
    {
  
        $services = Service::when($request->search, fn($query) 
            => $query->whereLike('service', $request->search)
               ->orWhereLike('price', $request->search)
        )->when($request->trashed, fn($query, $filter) 
            => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed()
        )->paginate(10)->withQueryString();

        $trashedServicesCount = Service::onlyTrashed()->count();
        /*  
         *  Filter with Query String 
         *  is needed to preserve 
         *  search and paginate 
         *  data 
        */
        $filters = $request->only(['search', 'trashed']);
        return Inertia::render('Services', compact('services', 'filters', 'trashedServicesCount'));
    }

    public function store(ServiceRequest $request)
    {
        Service::create($request->validated());
        return back()->with('success', 'Service has added successfully!');
    }

    public function update(Service $service, ServiceRequest $request)
    {
        $service->update($request->validated());
        return back()->with('success', 'Service has been updated successfully!');
    }

    public function destroy(Service $service)
    {
        $service->delete();
        return back()->with('success', 'Service has been deleted successfully!');
    }
    
    public function restore(Service $service)
    {
        $service->restore();
        return back()->with('success', 'Service has been restored successfully!');
    }
}
