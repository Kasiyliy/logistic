<?php
/**
 * Created by PhpStorm.
 * User: eldarkhasen
 * Date: 3/28/20
 * Time: 23:02
 */

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class LessonTypesResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
        ];
    }

}