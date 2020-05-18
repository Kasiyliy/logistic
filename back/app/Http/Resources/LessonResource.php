<?php
/**
 * Created by PhpStorm.
 * User: eldarkhasen
 * Date: 3/28/20
 * Time: 23:01
 */

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class LessonResource extends JsonResource
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
            'content' => $this->content,
            'lesson_type' => new LessonTypesResource($this->lessonType),
        ];
    }
}